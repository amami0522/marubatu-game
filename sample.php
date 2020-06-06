<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>○×ゲーム</title>
    <link rel="stylesheet" href="style.css">
    <script src="sample.js"></script>
</head>
<body>
    <div id="container">
        <?php for($i = 0; $i < 3; $i++){ ?>
            <?php for($j = 0; $j < 3; $j++){ ?>
            <div id="id<?php echo $i*3+$j; ?>" class="box" onclick="action(<?php echo $i*3+$j; ?>);"></div>
            <?php } ?>
        <?php } ?>
        <div id="clear" onclick="clear1();">Clear</div>
    </div>
    <br>
    <div id="finish"></div>
</body>
</html>