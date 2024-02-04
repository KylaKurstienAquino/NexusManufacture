var vehicleoptions = {
    "Motorcycle":["Honda CB series", "Yamaha Sniper 150", "Suzuki Smash 115 FI", "Kawasaki Ninja 400", "SYM Symphony ST 200i", "KTM 1290 Super Adventure R", "Ducati Panigale V4"],
    "Car":["Toyota Camry", "Honda Civic Type R", "Ford: Mustang GT Premium Fastback", "Chevrolet: Silverado 1500 LTZ Crew Cab", "Mitsubishi Outlander SEL", "Nissan Rogue SV", "Hyundai: Sonata Sedan"],
    "Scooter":["Honda Click 150i", "Yamaha Aerox 155", "Suzuki Skydrive Sport", "SYM Joyride 200", "TVS Dazz 110", "Vespa Primavera 150", "Kymco Like 150i ABS"],
    "Trucks":["Isuzu: D-Max", "Mitsubishi Fuso Canter FE130", "Hino 700 Series F1E", "Foton Tornado 2", "Hyundai: Mighty", "Volvo FH16", "Mercedes-Benz Actros 1845"]
}

var vehiclepriceoptions = {
    "Motorcycle":{"Honda CB series": [6,806,240], "Yamaha Sniper 150": [7,900,410], "Suzuki Smash 115 FI": [11,340,320], "Kawasaki Ninja 400": [9,998,800], "SYM Symphony ST 200i": [8,923,670], "KTM 1290 Super Adventure R": [4,814,290], "Ducati Panigale V4": [9,345,480]},
    "Car":{"Toyota Camry": [2,457,100], "Honda Civic Type R": [3,870,200], "Ford: Mustang GT Premium Fastback": [2,351,500], "Chevrolet: Silverado 1500 LTZ Crew Cab": [2,239,750], "Mitsubishi Outlander SEL": [4,503,200], "Nissan Rogue SV": [6,629,240], "Hyundai: Sonata Sedan": [4,468,400]},
    "Scooter":{"Honda Click 150i": [10,830,200], "Yamaha Aerox 155": [3,928,680], "Suzuki Skydrive Sport": [3,873,300], "SYM Joyride 200": [7,122,100], "TVS Dazz 110": [12,754,940], "Vespa Primavera 150": [3,447,800], "Kymco Like 150i ABS": [2,812,100]},
    "Trucks":{"Isuzu: D-Max": [6,550,770], "Mitsubishi Fuso Canter FE130": [7,276,300], "Hino 700 Series F1E": [7,108,380], "Foton Tornado 2": [6,546,330], "Hyundai: Mighty": [10,601,400], "Volvo FH16": [10,952,710], "Mercedes-Benz Actros 1845": [8,628,500]}
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

    var veccat = document.getElementById('veccat')
    var vectype = document.getElementById('vectype')
    var val = document.getElementById('val')

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

    for(var x in vehiclepriceoptions){
        veccat.options[veccat.options.length] = new Option(x)
    }
    veccat.onchange = function(){   
        val.value = "";
        vectype.length = 1

        for(var y in vehiclepriceoptions[this.value]){
            vectype.options[vectype.options.length] = new Option(y)
        }
    }
    
    vectype.onchange = function() {
        z = vehiclepriceoptions[veccat.value][this.value]

        if (vectype.value == "default") {
            val.value = "";
        }
        else {
            for(let i=0; i<z.length; i++){
                val.value = z ;
            }
        }
        
        
    }

}