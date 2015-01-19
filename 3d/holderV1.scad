module holder() {
  difference(){
    cube(size=[20,12,22], center=false); // base cube
    translate([2,-1,2]) cube(size=[16,22,40], center=false); // hollow cube
    rotate([0,90,0]) translate([-15,6,-2]) cylinder(h=5, r=3.2, center=false, $fn=20);
    rotate([0,90,0]) translate([-15,4.1,15]) cylinder(h=6, r=.4, center=false, $fn=20);
    rotate([0,90,0]) translate([-15,7.9,15]) cylinder(h=6, r=.4, center=false, $fn=20);
  }
  //rotate([0,90,0]) translate([-30,6,40]) cylinder(h=5, r=3, center=false, $fn=20);
}
holder();