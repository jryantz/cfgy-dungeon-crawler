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
        
        $this->slots = array(
            1 => array('', null, null, 0),
            2 => array('', null, null, 0),
            3 => array('', null, null, 0),
            4 => array('', null, null, 0),
            5 => array('', null, null, 1),
            6 => array('', null, null, 1),
            7 => array('', null, null, 1),
            8 => array('', null, null, 1),
            9 => array('', null, null, 1),
        );
    }
    
    public function setSlot($num, $item, $stat1, $stat2) {
        $slots[$num][0] = $item;
        $slots[$num][1] = $stat1;
        $slots[$num][2] = $stat2;
    }
    
    public function slotCheck($num) {
        if($this->slots[$num][0] == null) {
            $this->slots[$num][0] = 'empty';
            $this->slots[$num][1] = null;
            $this->slots[$num][2] = null;
        }
        
        switch($this->inventoryLvl) {
            case 5:
                $this->slots[9][3] = 0;
            case 4:
                $this->slots[8][3] = 0;
            case 3:
                $this->slots[7][3] = 0;
            case 2:
                $this->slots[6][3] = 0;
            case 1:
                $this->slots[5][3] = 0;
                break;
            default:
                break;
        }
        
        for($i = 5; $i <= 9; $i++) {
            if($this->slots[$i][3] == 1) {
                $this->slots[$i][0] = 'locked';
                $this->slots[$i][1] = null;
                $this->slots[$i][2] = null;
            }
        }
    }
    
    public function show($num) {
        $this->slotCheck($num);
        
        $output = '<a href="#" onclick="toolDesc(\'slot' . $num . '\');" class="slot'; 
        
        if($this->slots[$num][3] == 1) {
            $output .= " locked";
        }
        
        $output .= '">
                <span>' . $this->slots[$num][0] . '</span>
            </a>
            <div class="drop" id="slot' . $num . '" style="display:none; height:0px; font-size:0px;">
                <span>Damage: ' . $this->slots[$num][1] . '</span>
                <span>Hit Chance: ' . $this->slots[$num][2] . '</span>
            </div>';
        
        return $output;
    }
}