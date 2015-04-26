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
            <div id="stats" class="stats">
                <?php
                    $Stats = new Stats();
                    echo $Stats->show();
                ?>
            </div>
            
            <div id="inv" class="inv"></div>
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
    
    <script src="classes/gui/Inventory.js" type="text/javascript"></script>
    <script>
        document.getElementById('inv').innerHTML = show(0);
        document.getElementById('inv').innerHTML += show(1);
        document.getElementById('inv').innerHTML += show(2);
        document.getElementById('inv').innerHTML += show(3);
        document.getElementById('inv').innerHTML += show(4);
        document.getElementById('inv').innerHTML += show(5);
        document.getElementById('inv').innerHTML += show(6);
        document.getElementById('inv').innerHTML += show(7);
        document.getElementById('inv').innerHTML += show(8);
    </script>
    
    <script src="classes/gui/Stats.js" type="text/javascript"></script>
    <script>
        document.getElementById('stats').innerHTML = show();
    </script>
</html>