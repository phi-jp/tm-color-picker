

tm.main(function() {
    setupHeader();
    setupBody();
});

var ROW = 8;    // 列
var COL = 5;    // 行


var setupHeader = function() {
    var header = tm.dom.Element("#header");
    
    for (var i=0; i<ROW; ++i) {
        var panel = tm.dom.Element(document.createElement("div"));
        header.append(panel);
        
        var angle = 360/ROW*i;
        panel.style
            .set("display", "inline-block")
            .set("width", (100/ROW) + "%")
            .set("height", "100%");
        panel.backgroundColor = "hsl({0}, 75%, 50%)".format(angle);
    }
};

var setupBody = function() {
    var body = tm.dom.Element("#body");
    
    for (var i=0; i<COL; ++i) {
        for (var j=0; j<ROW; ++j) {
            var panel = tm.dom.Element(document.createElement("div")).appendTo(body);
            
            var angle = 0;
            var s = (100/COL)*i;
            var l = (100/ROW)*j;
            
            panel.style
                .set("float", "left")
                .set("display", "inline-block")
                .set("width", (100/ROW) + "%")
                .set("height", (100/COL) + "%");
                
            panel.backgroundColor = "hsl({0}, {1}%, {2}%)".format(angle, s, l);
        }
    }
    
};
