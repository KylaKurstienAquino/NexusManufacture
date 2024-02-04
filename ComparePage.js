var vehicleoptions = {
    "Motorcycle":["Honda CB series", "Yamaha Sniper 150", "Suzuki Smash 115 FI", "Kawasaki Ninja 400", "SYM Symphony ST 200i", "KTM 1290 Super Adventure R", "Ducati Panigale V4"],
    "Car":["Toyota Camry", "Honda Civic Type R", "Ford: Mustang GT Premium Fastback", "Chevrolet: Silverado 1500 LTZ Crew Cab", "Mitsubishi Outlander SEL", "Nissan Rogue SV", "Hyundai: Sonata Sedan"],
    "Scooter":["Honda Click 150i", "Yamaha Aerox 155", "Suzuki Skydrive Sport", "SYM Joyride 200", "TVS Dazz 110", "Vespa Primavera 150", "Kymco Like 150i ABS"],
    "Trucks":["Isuzu: D-Max", "Mitsubishi Fuso Canter FE130", "Hino 700 Series F1E", "Foton Tornado 2", "Hyundai: Mighty", "Volvo FH16", "Mercedes-Benz Actros 1845"]
}

window.onload = function () {
    var comp1 = document.getElementById('comp1')
    var veh1 = document.getElementById('veh1')
    var comp2 = document.getElementById('comp2')
    var veh2 = document.getElementById('veh2')
    var comp3 = document.getElementById('comp3')
    var veh3 = document.getElementById('veh3')
    var comp4 = document.getElementById('comp4')
    var veh4 = document.getElementById('veh4')

    for(var y in vehicleoptions){
        comp1.options[comp1.options.length] = new Option(y)
    }
    comp1.onchange = function(){
        veh1.length = 1

        z = vehicleoptions[comp1.value]
        for(let i=0; i<z.length; i++){
            veh1.options[veh1.options.length] = new Option(z[i])
        }
    }
    for(var y in vehicleoptions){
        comp2.options[comp2.options.length] = new Option(y)
    }
    comp2.onchange = function(){
        veh2.length = 1

        z = vehicleoptions[comp2.value]
        for(let i=0; i<z.length; i++){
            veh2.options[veh2.options.length] = new Option(z[i])
        }
    }
    for(var y in vehicleoptions){
        comp3.options[comp3.options.length] = new Option(y)
    }
    comp3.onchange = function(){
        veh3.length = 1

        z = vehicleoptions[comp3.value]
        for(let i=0; i<z.length; i++){
            veh3.options[veh3.options.length] = new Option(z[i])
        }
    }
    for(var y in vehicleoptions){
        comp4.options[comp4.options.length] = new Option(y)
    }
    comp4.onchange = function(){
        veh4.length = 1

        z = vehicleoptions[comp4.value]
        for(let i=0; i<z.length; i++){
            veh4.options[veh4.options.length] = new Option(z[i])
        }
    }

}