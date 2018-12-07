const Player = function(x, y, ctx){
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.velY = 0;
    this.space=false;
    this.width = 126;
    this.height = 126;
    this.spriteIndex = 0;
    this.ticks=0;
    this.sprites = [document.getElementById('player0'),
          document.getElementById('player1'),
          document.getElementById('player2')];
    var self = this;
    window.addEventListener('keydown', function(e){
        if (e.keyCode === 32 && !self.dead){
            self.space=true;
        }
    });
    window.addEventListener('keyup', function(e){
        self.space=false;
        if(self.velY>2){
            self.velY=2;
        }
    });
  };

  Player.prototype.update = function(enemies){
      if(this.space==false){
          if(this.y<=40){
            this.velY = 0;
          }else{
            this.y += this.velY;
            this.velY -= 0.05;
          }
      }else{
        this.velY += 0.08;
        this.y += this.velY;
      }
      this.ticks++;
      if (this.ticks % 15 === 0){
        this.spriteIndex = (this.spriteIndex+1) % this.sprites.length;
      }
  };
  

  Player.prototype.render = function(){
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.drawImage(this.sprites[this.spriteIndex], this.x, this.y);
    this.ctx.restore();
  };
