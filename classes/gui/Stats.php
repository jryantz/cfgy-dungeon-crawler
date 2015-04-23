<?php

/*
 * -----------------------------------------------------
 * Stats->show - takes the provided stats of the
 * player and outputs them to the GUI.
 * -----------------------------------------------------
 */

class Stats {
    private $lvl = 2,
            $maxXp = 60,
            $xp = 54,
            $maxHealth = 100,
            $health = 50,
            $str = 7,
            $int = 3,
            $agility = 4,
            $money = 364;
    
    public function show() {
        return ('
            <div class="slot"> <span>Level: ' . $this->lvl . '</span> </div>
            <div class="slot">
                <div class="progBarContainer gradient">
                    <div class="progressbar green" style="width:' . ($this->health/$this->maxHealth)*100 . '%"></div>
                </div>
                <span style="margin-left:10px;">HP: ' . $this->health . '/' . $this->maxHealth . '</span>
            </div>
            <div class="slot">
                <div class="progBarContainer gradient">
                    <div class="progressbar purple" style="width:' . ($this->xp/$this->maxXp)*100 . '%"></div>
                </div>
                <span style="margin-left:10px;">XP: ' . $this->xp . '/' . $this->maxXp . '</span>
            </div>
            <div class="slot"> <span>Strength: ' . $this->str . '</span> </div>
            <div class="slot"> <span>Intelligence: ' . $this->int . '</span> </div>
            <div class="slot"> <span>Agility: ' . $this->agility . '</span> </div>
            <div class="slot"> <span>Money: $' . $this->money . '</span> </div>
        ');
    }
    
    public function setLvl($var) {
        if(is_numeric($var)) {
            $this->lvl = $var;
            return true;
        }
        return false;
    }
    
    public function setXp($var) {
        if(is_numeric($var)) {
            $this->xp = $var;
            return true;
        }
        return false;
    }
    
    public function setMaxHealth($var) {
        if(is_numeric($var)) {
            $this->maxHealth = $var;
            return true;
        }
        return false;
    }
    
    public function setHealth($var) {
        if(isset($this->maxHealth)) {
            if(is_numeric($var)) {
                $this->health = $var;
                return true;
            }
        }
        return false;
    }
    
    public function setStr($var) {
        if(is_numeric($var)) {
            $this->str = $var;
            return true;
        }
        return false;
    }
    
    public function setInt($var) {
        if(is_numeric($var)) {
            $this->int = $var;
            return true;
        }
        return false;
    }
    
    public function setAgility($var) {
        if(is_numeric($var)) {
            $this->agility = $var;
            return true;
        }
        return false;
    }
    
    public function setMoney($var) {
        if(is_numeric($var)) {
            $this->money = $var;
            return true;
        }
        return false;
    }
}