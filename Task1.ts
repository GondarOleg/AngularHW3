enum MenuItem {
    Main,
    Item1,
    Item2,
    Item3
}

interface Menu {
    mainItem?:MenuItem;
    items:[MenuItem, MenuItem, MenuItem];
}


let menu:Menu = {items: [MenuItem.Item1, MenuItem.Item2, MenuItem.Item3]};

console.log(menu);

let menu1:Menu = {mainItem: MenuItem.Main, items: [MenuItem.Item1, MenuItem.Item2, MenuItem.Item3]};
console.log(menu1);


interface Menu1 {
    mainItem:MenuItem;
    items:[MenuItem, MenuItem, MenuItem];
}

//let menu2:Menu1 = {items: [MenuItem.Item1, MenuItem.Item2, MenuItem.Item3]}
let menu2:Menu1 = {mainItem: MenuItem.Main, items: [MenuItem.Item1, MenuItem.Item2, MenuItem.Item3]};
console.log(menu2);