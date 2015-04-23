<?php
require 'classes/gui/Inventory.php';

require 'classes/gui/Map.php';

require 'classes/gui/Stats.php';

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
                <a href="#" onclick="toolDesc('slot1');" class="slot">
                    <span><?php echo $slot1; ?></span>
                </a>
                <div class="drop" id="slot1" style="display:none; height:0px; font-size:0px;">
                    <span>Damage: 4</span>
                    <span>Hit Chance: 7</span>
                </div>
                
                <a href="#" onclick="toolDesc('slot2');" class="slot">
                    <span><?php echo $slot2; ?></span>
                </a>
                <div class="drop" id="slot2" style="display:none; height:0px; font-size:0px;">
                    <span>Damage:</span>
                    <span>Hit Chance:</span>
                </div>
                
                <a href="#" onclick="toolDesc('slot3');" class="slot">
                    <span><?php echo $slot3; ?></span>
                </a>
                <div class="drop" id="slot3" style="display:none; height:0px; font-size:0px;">
                    <span>Damage:</span>
                    <span>Hit Chance:</span>
                </div>
                
                <a href="#" onclick="toolDesc('slot4');" class="slot">
                    <span><?php echo $slot4; ?></span>
                </a>
                <div class="drop" id="slot4" style="display:none; height:0px; font-size:0px;">
                    <span>Damage:</span>
                    <span>Hit Chance:</span>
                </div>
                
                <a href="#" onclick="toolDesc('slot5');" class="slot<?php if($inventoryLvl < 1) { echo ' locked'; } ?>">
                    <span><?php echo $slot5; ?></span>
                </a>
                <div class="drop" id="slot5" style="display:none; height:0px; font-size:0px;">
                    <span>Damage:</span>
                    <span>Hit Chance:</span>
                </div>
                
                <a href="#" onclick="toolDesc('slot6');" class="slot<?php if($inventoryLvl < 2) { echo ' locked'; } ?>">
                    <span><?php echo $slot6; ?></span>
                </a>
                <div class="drop" id="slot6" style="display:none; height:0px; font-size:0px;">
                    <span>Damage:</span>
                    <span>Hit Chance:</span>
                </div>
                
                <a href="#" onclick="toolDesc('slot7');" class="slot<?php if($inventoryLvl < 3) { echo ' locked'; } ?>">
                    <span><?php echo $slot7; ?></span>
                </a>
                <div class="drop" id="slot7" style="display:none; height:0px; font-size:0px;">
                    <span>Damage:</span>
                    <span>Hit Chance:</span>
                </div>
                
                <a href="#" onclick="toolDesc('slot8');" class="slot<?php if($inventoryLvl < 4) { echo ' locked'; } ?>">
                    <span><?php echo $slot8; ?></span>
                </a>
                <div class="drop" id="slot8" style="display:none; height:0px; font-size:0px;">
                    <span>Damage:</span>
                    <span>Hit Chance:</span>
                </div>
                
                <a href="#" onclick="toolDesc('slot9');" class="slot<?php if($inventoryLvl < 5) { echo ' locked'; } ?>">
                    <span><?php echo $slot9; ?></span>
                </a>
                <div class="drop" id="slot9" style="display:none; height:0px; font-size:0px;">
                    <span>Damage:</span>
                    <span>Hit Chance:</span>
                </div>
                
            </div>
        </div>
        
        <div id="mainPane" class="mainPane">
            
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
            
        </div>
    </body>
    
    <script src="js/main-0.0.1.js" type="text/javascript"></script>
</html>