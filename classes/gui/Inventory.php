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

$inventoryLvl = 0;

/*
 * -----------------------------------------------------
 * Items in inventory when level is 0
 * -----------------------------------------------------
 */

$slot1 = 'Sharpened Stick';
$slot2 = '';
$slot3 = '';
$slot4 = '';

if($slot1 == null) {
    $slot1 = 'empty';
}

if($slot2 == null) {
    $slot2 = 'empty';
}

if($slot3 == null) {
    $slot3 = 'empty';
}

if($slot4 == null) {
    $slot4 = 'empty';
}

/*
 * -----------------------------------------------------
 * Items in inventory when level is 1
 * -----------------------------------------------------
 */

$slot5 = '';

if($inventoryLvl < 1) {
    $slot5 = 'locked';
} else if($slot5 == null) {
    $slot5 = 'empty';
}

/*
 * -----------------------------------------------------
 * Items in inventory when level is 2
 * -----------------------------------------------------
 */

$slot6 = '';

if($inventoryLvl < 2) {
    $slot6 = 'locked';
} else if($slot6 == null) {
    $slot6 = 'empty';
}

/*
 * -----------------------------------------------------
 * Items in inventory when level is 3
 * -----------------------------------------------------
 */

$slot7 = '';

if($inventoryLvl < 3) {
    $slot7 = 'locked';
} else if($slot7 == null) {
    $slot7 = 'empty';
}

/*
 * -----------------------------------------------------
 * Items in inventory when level is 4
 * -----------------------------------------------------
 */

$slot8 = '';

if($inventoryLvl < 4) {
    $slot8 = 'locked';
} else if($slot8 == null) {
    $slot8 = 'empty';
}

/*
 * -----------------------------------------------------
 * Items in inventory when level is 5
 * -----------------------------------------------------
 */

$slot9 = '';

if($inventoryLvl < 5) {
    $slot9 = 'locked';
} else if($slot9 == null) {
    $slot9 = 'empty';
}