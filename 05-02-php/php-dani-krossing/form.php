<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="post">
        <label for="name">Your name:</label>
        <input name="name" id="name" type="text">

        <label for="age">Your age:</label>
        <input name="age" id="age" type="number">

        <button type="submit">Submit</button>

        <?php
        echo htmlspecialchars($_POST['name']);
        echo (int)$_POST['age'];
        ?>
    </form>
</body>

</html> 