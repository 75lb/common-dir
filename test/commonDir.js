var test = require("tape"),
    os = require("os"),
    commonDir = require("../");

if (os.platform() === "win32"){
    test("commonDir: simple (win)", function(t){
        var input = [
            "C:\\Users\\IEUser\\Documents\\GitHub\\wodge",
            "C:\\Users\\IEUser\\Documents\\GitHub\\wodge\\folder",
            "C:\\Users\\IEUser\\Documents\\GitHub\\wodge\\folder\\five",
            "C:\\Users\\IEUser\\Documents\\GitHub\\wodge\\folder\\four",
        ];
        t.equal(commonDir(input), "C:\\Users\\IEUser\\Documents\\GitHub\\");
        t.end();
    });

    test("commonDir: wildly diff folders (win)", function(t){
        var input = [
            "C:\\this\\that",
            "C:\\another\\something",
            "C:\\andagain\\different"
        ];
        t.equal(commonDir(input), "C:\\");
        t.end();
    });

    test("commonDir: just one (win)", function(t){
        var input = [
            "C:\\Users\\Lloyd\\Documents\\LEGO Creations\\MINDSTORMS EV3 Projects\\Randomness.ev3"
        ];
        t.equal(commonDir(input), "C:\\Users\\Lloyd\\Documents\\LEGO Creations\\MINDSTORMS EV3 Projects\\");
        t.end();
    });

} else {
    test("commonDir: simple", function(t){
        var input = [
            "/Users/Lloyd/Documents/Kunai/renamer/one",
            "/Users/Lloyd/Documents/Kunai/renamer/folder/folder/five",
            "/Users/Lloyd/Documents/Kunai/renamer/folder/four",
            "/Users/Lloyd/Documents/Kunai/another",
            "/Users/Lloyd/Documents/Kunai/renamer/two",
            "/Users/Lloyd/Documents/Kunai/renamer/folder/three",
            "/Users/Lloyd/Documents/Kunai/renamer"
        ];
        t.equal(commonDir(input), "/Users/Lloyd/Documents/Kunai/");
        t.end();
    });

    test("commonDir: wildly diff folders", function(t){
        var input = [ "/this/that", "/another/something", "/andagain/different" ];
        t.equal(commonDir(input), "/");
        t.end();
    });

    test("commonDir: another", function(t){
        var input = [
            "/Users/Lloyd/Documents/LEGO Creations/MINDSTORMS EV3 Projects/Randomness.ev3", 
            "/Users/Lloyd/Desktop/Screen Shot 2014-03-27 at 10.00.12.png"
        ];
        t.equal(commonDir(input), "/Users/Lloyd/");
        t.end();
    });

    test("commonDir: just one", function(t){
        var input = [
            "/Users/Lloyd/Documents/LEGO Creations/MINDSTORMS EV3 Projects/Randomness.ev3"
        ];
        t.equal(commonDir(input), "/Users/Lloyd/Documents/LEGO Creations/MINDSTORMS EV3 Projects/");
        t.end();
    });

    test("commonDir: all same folder", function(t){
        var input = [
            "/Users/Lloyd/Documents/Kunai/renamer/one",
            "/Users/Lloyd/Documents/Kunai/renamer/two",
            "/Users/Lloyd/Documents/Kunai/renamer/three"
        ];
        t.equal(commonDir(input), "/Users/Lloyd/Documents/Kunai/renamer/");
        t.end();
    });

    test("commonDir: hangs", function(t){
        var input = [
            "file1.txt",
            "file1.txt"
        ];
        t.equal(commonDir(input), "./");
        t.end();
    });

    test("commonDir: file and parent folder", function(t){
        var input = [
            "/Users/Lloyd/Documents/Kunai/renamer/one",
            "/Users/Lloyd/Documents/Kunai/renamer"
        ];
        t.equal(commonDir(input), "/Users/Lloyd/Documents/Kunai/");
        t.end();
    });
}