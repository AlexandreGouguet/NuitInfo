const Enemy = function(xpos, ypos, speed, ctx){
    this.ypos = ypos;
    this.xpos = xpos;
    this.height = 126;
    this.ctx = ctx;
    this.speed = speed;
    this.width = 126;
    this.spriteIndex = 0;
    this.ticks=0;
    this.sprites = [document.getElementById('enemy0'),
          document.getElementById('enemy1'),
          document.getElementById('enemy2')];
  };
  
  Enemy.prototype.update = function(){
    this.xpos -= this.speed;
    this.ticks++;
    if (this.ticks % 15 === 0){
      this.spriteIndex = (this.spriteIndex+1) % this.sprites.length;
    }
  };
  
  Enemy.prototype.render = function(){
    this.ctx.save();
    this.ctx.drawImage(this.sprites[this.spriteIndex], this.xpos, this.ypos);
    this.ctx.restore();
  };