let nombreUsuario = prompt('Hola! Ingresa tu nombre :)');
alert('Bienvenido(a) a Bordageek '+nombreUsuario);


let mensaje = prompt('¿Quieres visitar nuestra tienda?');
    while (mensaje == 'si') {
        let categoria = prompt('Escoge una categoría:\n1. Pokemon\n2. Series\n3. Anime');
        if (categoria == '1'){
            let pokemon = prompt('Categoría Pokemon:\n1. Pikachu... $2.000\n2. Charmander... $3.000\n3. Bulbasaur... $2.500');
           
                switch(pokemon){
                    case '1':
                        alert('Pikachu fue agregado al carrito');
                        break;
                
                    case '2':
                        alert('Charmander fue agregado al carrito');
                        break;
                
                    case '3':
                        alert('Bulbasaur fue agregado al carrito');
                        break;
                    default:
                        alert('Producto no encontrado');
                        break;
                };
              
                
            }


        if (categoria == '2'){
                let serie = prompt('Categoría Serie:\n1. Supernatural... $1.000\n2. The Mandalorian... $2.000\n3. The Office... $3.500');
               
                    switch(serie){
                        case '1':
                            alert('Supernatural fue agregado al carrito');
                            break;
                    
                        case '2':
                            alert('The Mandalorian fue agregado al carrito');
                            break;
                    
                        case '3':
                            alert('The Office fue agregado al carrito');
                            break;
                        default:
                            alert('Producto no encontrado');
                            break;
                    };
                  
                    
            }

            if (categoria == '3'){
                let serie = prompt('Categoría Serie:\n1. Dragon Ball... $5.000\n2. Death Note... $2.000\n3. Sailor Moon... $3.500');
               
                    switch(serie){
                        case '1':
                            alert('Dragon Ball fue agregado al carrito');
                            break;
                    
                        case '2':
                            alert('Death Note fue agregado al carrito');
                            break;
                    
                        case '3':
                            alert('Sailor Moon fue agregado al carrito');
                            break;
                        default:
                            alert('Producto no encontrado');
                            break;
                    };
                  
                    
            }
        mensaje = prompt('Quieres comprar otro producto? (si / no)');
             
    }

            
            
          