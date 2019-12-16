const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw')
    }
};
circle.draw();

//Factory Function
function createCircle(radius) {
    return{
        radius,
        draw: function() {
            console.log('draw inside factory function')
        }
    }
}
const circle_factory = createCircle(2);
circle_factory.draw()

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    //making variables private
    let defaultLocation = { x: 0, y: 0 };
    this.draw = function(){
        console.log(`Draw inside Constructor: ${this.radius}`);
        defaultLocation.x = 1;
    }
}
const circle_constructor = new Circle(35);
circle_constructor.draw()

//Adding-Deleting properties
const circle_new_properties = new Circle(343);
circle_new_properties.location = { x: 5 };
const propertyName = 'access from square brackets'
circle_new_properties[propertyName] = { y:6 }
delete circle_new_properties[propertyName];