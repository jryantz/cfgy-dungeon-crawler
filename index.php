<?php
require_once 'core/init.php';

//require 'classes/gui/Inventory.php';
//require 'classes/gui/Map.php';
//require 'classes/gui/Stats.php';

$provMap = array(
    array(0, 1, 4, 0, 0),
    array(2, 1, 1, 1, 1),
    array(0, 1, 0, 0, 1),
    array(1, 2, 0, 2, 1),
    array(0, 3, 0, 0, 3)
);
?>

<!doctype html>

<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        
        <link rel="stylesheet" type="text/css" href="css/global.css">
        <link rel="stylesheet" type="text/css" href="css/pane.css">
        
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="author" content="">
    </head>
    
    <body>
        <div id="loading" class="loading" style="visibility:visible;">
            <div class="loadingTitle">CFGY</div>
            <div class="loadingSub">loading...</div>
        </div>
        
        <div id="statsPane" class="statsPane">
            <div class="stats">
                <?php
                    $Stats = new Stats();
                    echo $Stats->show();
                ?>
            </div>
            
            <div class="inv">
                <?php
                    $Inventory = new Inventory();
                    
                    $Inventory->setSlot(1, 'Sword', 2, 'Hit Chance', 6);
                    $Inventory->setSlot(2, 'Bow', 3, 'Dodge Chance', 4);
                    $Inventory->setSlot(3, 'Shield', 0, 'Health Boost', 15);
                    $Inventory->setSlot(4, 'Armor', 0, 'Defense', 3);

                    for($i = 1; $i <= 9; $i++) {
                        echo $Inventory->show($i);
                    }
                ?>
            </div>
        </div>
        
        <div id="mainPane" class="mainPane" style="display:block;">
            Main
        </div>
        
        <div id="debugPane" class="debugPane" style="display:none;">
            Debug
        </div>
        
        <div id="mapPane" class="mapPane">
            <?php
                $Map = new Map();
                for($i = 0; $i <= 4; $i++) {
                    for($j = 0; $j <= 4; $j++) {
                        echo $Map->decode($provMap, $i, $j);
                    }
                }
            ?>
        </div>
        
        <div id="interactionPane" class="interactionPane">
            <a href="#" onclick="flip('mainPane', 'debugPane');">Debug<br>Mode</a>
        </div>
    </body>
    
    <script src="js/main-0.0.1.js" type="text/javascript"></script>
</html>