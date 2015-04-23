<?php

/*
 * -----------------------------------------------------
 * Map->decode - takes in current level array and
 * location to check what the slot is and what
 * it contains.
 *
 * 0 - blocked - black
 * 1 - open - white
 * 2 - contains - blue
 * 3 - entrance/exit - green
 * 4 - active - red dot
 * yellow represents cell not read
 * -----------------------------------------------------
 */

class Map {
    
    public function decode($map, $locX, $locY) {
        switch($map[$locX][$locY]) {
            case 0:
                return '<div class="cell" style="background-color:black; border-color:black;"></div>';
                break;
            case 1:
                return '<div class="cell" style="background-color:white;"></div>';
                break;
            case 2:
                return '<div class="cell" style="background-color:blue;"></div>';
                break;
            case 3:
                return '<div class="cell" style="background-color:green;"></div>';
                break;
            case 4:
                return '<div class="cell" style="background-color:red;"></div>';
                break;
            default:
                return '<div class="cell" style="background-color:yellow;"></div>';
        }
    }
}