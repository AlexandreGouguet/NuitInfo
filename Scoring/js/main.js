
 window.onload = function(){
    const c = document.getElementById('canvas');
    c.width = c.offsetWidth;
    c.height = c.offsetHeight;
 
    const ctx = c.getContext('2d');

    const player = new Player(0, 80, ctx);
    const enemies = [];
    const enemy = new Enemy(400, 300, 2, ctx);
    enemies.push(enemy);
    const floor = new Floor(0, 547, ctx);

    gameLoop();
 
 
    /*
     MAIN GAME LOOP
    */
    function gameLoop(){
      ctx.fillRect(0,0,c.width,c.height);
      player.update(enemies);
      player.render();
      enemy.update();
      enemy.render();
      floor.render();
      window.requestAnimationFrame(gameLoop);
    }
  };
 