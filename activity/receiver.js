socket.on("onsize", function(size) {
    ctx.lineWidth = size;
  });
  socket.on("oncolor", function(color) {
    ctx.strokeStyle = color;
  });
  socket.on("ontoolchange", function(tool) {
    handleTool(tool);
  });
  socket.on("onhamburger", function() {
    handleHamburger();
  });
  socket.on("onmousedown", function(point) {
    const { x, y, color, width } = point;
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    undoArr.push(point);
  });
  socket.on("onmousemove", function(point) {
    const { x, y, color, width } = point;
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.lineTo(x, y);
    ctx.stroke();
    undoArr.push(point);
  });
  socket.on("onundo", function() {
    undoLast();
  });
  socket.on("onredo", function() {
    redoLast();
  });