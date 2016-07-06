

tm.main(function() {
    setupHeader();
    setupBody(0);
});

var ROW = 12;    // 列
var COL = 10;    // 行


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
        
        (function(angle) {
            panel.event.add("mouseover", function() {
                setupBody(angle);
            });
        })(angle);
        
        panel.style
            .set("box-shadow", "0px 0px 1px 0px #aaa")
            .set("padding-top", "20px")
            .set("font-size", "9px")
            .set("text-shadow", "1px 1px 2px #aaa")
            .set("text-align", "center");

    }
};

var setupBody = function(angle) {
    var body = tm.dom.Element("#body");
    
    body.html = "";
    
    for (var i=0; i<COL; ++i) {
        for (var j=0; j<ROW; ++j) {
            var panel = tm.dom.Element(document.createElement("div")).appendTo(body);
            
            var s = (80/COL)*i + 10;
            var l = (80/ROW)*j + 10;
            
            panel.style
                .set("width", (100/ROW) + "%")
                .set("height", (100/COL) + "%");
                
            panel.backgroundColor = "hsl({0}, {1}%, {2}%)".format(angle, s, l);
            
            panel.html = "{0}, {1}%, {2}%".format(angle, s|0, l|0);
            // panel.html = "white";
            
            panel.classList.add("panel");
            
            panel.event.add("click", function() {
                window.open("./pick.html");
            });

        }
    }
    
};
