<?php

/*
 * -----------------------------------------------------
 * Level of inventory. Decides how many slots are open
 * in the inventory.
 *
 * 0 - slots one to four open
 * 1 - unlocks slot five
 * 2 - unlocks slot six
 * 3 - unlocks slot seven
 * 4 - unlocks slot eight
 * 5 - unlocks slot nine
 * -----------------------------------------------------
 */

class Inventory {
    private $inventoryLvl,
            $slots;
    
    public function __construct() {
        $this->inventoryLvl = 0;
        
        /*
         * 0 - name
         * 1 - stat 1 value
         * 2 - stat 2 name
         * 3 - stat 2 value
         * 4 - locked
         */
        $this->slots = array(
            1 => array('', null, null, null, 0),
            2 => array('', null, null, null, 0),
            3 => array('', null, null, null, 0),
            4 => array('', null, null, null, 0),
            5 => array('', null, null, null, 1),
            6 => array('', null, null, null, 1),
            7 => array('', null, null, null, 1),
            8 => array('', null, null, null, 1),
            9 => array('', null, null, null, 1),
        );
    }
    
    public function changeLvl($new) {
        if(is_numeric($new)) {
            $this->inventoryLvl = $new;
            return true;
        }
        return false;
    }
    
    public function setSlot($num, $item, $stat1v, $stat2n ,$stat2v) {
        $this->slots[$num][0] = $item;
        $this->slots[$num][1] = $stat1v;
        $this->slots[$num][2] = $stat2n;
        $this->slots[$num][3] = $stat2v;
    }
    
    public function unsetSlot($num) {
        $this->slots[$num][0] = '';
        $this->slots[$num][1] = null;
        $this->slots[$num][2] = null;
        $this->slots[$num][3] = null;
    }
    
    /*
     * slotCheck
     *
     * $num - the number of the slot
     *
     * this function takes in a slot in the inventory array
     * then checks if it is locked or not. 
     *
     * the first step is checking if the slot is
     * empty. if it is, all the fields are set to null
     * and the name is 'empty.'
     *
     * then in the switch statement, it checks what the
     * inventory level of the player is and unlocks the new
     * slots. 
     * 
     * the final for and if statements check if a slot is
     * locked, if it is, it sets the name to 'locked' and
     * the values to null.
     */
    public function slotCheck($num) {
        if($this->slots[$num][0] == null) {
            $this->slots[$num][0] = 'empty';
            $this->slots[$num][1] = null;
            $this->slots[$num][2] = null;
            $this->slots[$num][3] = null;
        }
        
        switch($this->inventoryLvl) {
            case 5:
                $this->slots[9][4] = 0;
            case 4:
                $this->slots[8][4] = 0;
            case 3:
                $this->slots[7][4] = 0;
            case 2:
                $this->slots[6][4] = 0;
            case 1:
                $this->slots[5][4] = 0;
                break;
            default:
                break;
        }
        
        for($i = 5; $i <= 9; $i++) {
            if($this->slots[$i][4] == 1) {
                $this->slots[$i][0] = 'locked';
                $this->slots[$i][1] = null;
                $this->slots[$i][2] = null;
                $this->slots[$i][3] = null;
            }
        }
    }
    
    /*
     * show
     * 
     * $num - the number of the slot
     * 
     * this function takes in a slot and returns the
     * requested slot with formatting for the inventory
     * pane in the gui.
     * 
     * also takes into account if the slot is locked. 
     * if it is, it appends the locked class to the anchor
     * tag.
     * 
     */
    public function show($num) {
        $this->slotCheck($num);
        
        $output = '<a href="#" onclick="toolDesc(\'slot' . $num . '\');" class="slot'; 
        
        if($this->slots[$num][4] == 1) {
            $output .= " locked";
        }
        
        $output .= '">
                <span>' . $this->slots[$num][0] . '</span>
            </a>
            <div class="drop" id="slot' . $num . '" style="display:none; height:0px; font-size:0px;">
                <span>Damage: ' . $this->slots[$num][1] . '</span>
                <span>' . $this->slots[$num][2] . ': ' . $this->slots[$num][3] . '</span>
            </div>';
        
        return $output;
    }
}