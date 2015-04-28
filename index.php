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
            <div id="stats" class="stats"></div>
            
            <div id="inv" class="inv"></div>
        </div>
        
        <div id="mainPane" class="mainPane" style="display:block;">
            Main
        </div>
        
        <div id="debugPane" class="debugPane" style="display:none;">
            Debug
            <a href="#" onclick="setSlot(0, 'Stick', '3', 'Hit Chance', '2');">Set Slot 1</a>
            <a href="#" onclick="unsetSlot(0);">Unset Slot 1</a>
            <a href="#" onclick="refresh();">Refresh</a>
        </div>
        
        <div id="mapPane" class="mapPane"></div>
        
        <div id="interactionPane" class="interactionPane">
            <a href="#" onclick="flip('mainPane', 'debugPane');">Debug<br>Mode</a>
        </div>
    </body>
    
    <script src="js/main-0.0.1.js" type="text/javascript"></script>
    
    <script src="classes/gui/Inventory.js" type="text/javascript"></script>
    <script src="classes/gui/Stats.js" type="text/javascript"></script>
    <script src="classes/gui/Map.js" type="text/javascript"></script>
    
    <script type="text/javascript">
        function refresh() {
            document.getElementById('inv').innerHTML = showInv(0);
            document.getElementById('inv').innerHTML += showInv(1);
            document.getElementById('inv').innerHTML += showInv(2);
            document.getElementById('inv').innerHTML += showInv(3);
            document.getElementById('inv').innerHTML += showInv(4);
            document.getElementById('inv').innerHTML += showInv(5);
            document.getElementById('inv').innerHTML += showInv(6);
            document.getElementById('inv').innerHTML += showInv(7);
            document.getElementById('inv').innerHTML += showInv(8);
            
            document.getElementById('stats').innerHTML = guiShowStats();
        }
        
        refresh();
        
        for(i = 0; i <= 4; i++) {
            for(j = 0; j <= 4; j++) {
                document.getElementById('mapPane').innerHTML += decode(i, j);
            }
        }
        
        
    </script>
</html>