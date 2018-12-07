const Floor = function(x, y, ctx){
    this.x = x;
    this.y = y;
    this.height=document.getElementById('floor').offsetHeight;
    this.ctx = ctx;
    this.sprites = document.getElementById('floor');
  };
  
  Floor.prototype.render = function(){
    this.ctx.save();
    this.ctx.drawImage(this.sprites, this.x, this.y);
    this.ctx.restore();
  };
