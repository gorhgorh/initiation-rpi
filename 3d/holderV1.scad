module holder() {
  difference(){
    cube(size=[40,12,22], center=false); // base cube
    translate([2,-1,2]) cube(size=[36,22,40], center=false); // hollow cube
    rotate([0,90,0]) translate([-15,6,-2]) cylinder(h=5, r=3, center=false, $fn=20);
    rotate([0,90,0]) translate([-15,4.1,35]) cylinder(h=6, r=.2, center=false, $fn=20);
    rotate([0,90,0]) translate([-15,7.9,35]) cylinder(h=6, r=.2, center=false, $fn=20);
  }
  //rotate([0,90,0]) translate([-30,6,40]) cylinder(h=5, r=3, center=false, $fn=20);
}
holder();