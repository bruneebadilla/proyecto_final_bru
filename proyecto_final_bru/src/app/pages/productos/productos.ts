import { Component } from '@angular/core';
import { ProductoCard } from '../../components/producto-card/producto-card';
import { Producto } from '../../models/producto';


@Component({
  imports: [ProductoCard],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  productos: Producto[] = [

    {
      id: 1, nombre: 'camiseta titular IFK 2025', precio:45.990,descripcion:'con transferencia 10% de descuento ',disponible:true,img:'https://acdn-us.mitiendanube.com/stores/384/008/products/1000722007-6d81bf3ce9f0ed2aa817470957280935-1024-1024.webp'
    },
    {
      id: 2, nombre: 'camiseta ', precio:73.600,descripcion:'con transferencia 10% de descuento',disponible:true,img:'https://acdn-us.mitiendanube.com/stores/384/008/products/1000721947-05a0c9ba3187514e5017470956835458-1024-1024.webp'
      
    },
     {
      id: 3, nombre: 'camiseta titular IFK 2025', precio:94.990,descripcion:'con transferencia 10% de descuento ',disponible:true,img:'https://acdn-us.mitiendanube.com/stores/341/874/products/jmt_1489-591b17db027ef3789b17812023588234-1024-1024.webp'
    },
     {
      id: 4, nombre: 'camiseta titular IFK 2025', precio:94.990,descripcion:'con transferencia 10% de descuento ',disponible:true,img:'https://acdn-us.mitiendanube.com/stores/341/874/products/20260701_102107-4c26d845d6dd16572417829241463327-1024-1024.webp'
    },
     {
      id: 5, nombre: 'camiseta titular IFK 2025', precio:70.990,descripcion:'con transferencia 10% de descuento ',disponible:true,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZKawM-AkeXaGfdRBzIK-p8EoA1zkCY0kk7tN08rxT_ItH8Wak7TB1wc&s=10'
    },
     {
      id: 6, nombre: 'camiseta titular IFK 2025', precio:70.990,descripcion:'con transferencia 10% de descuento ',disponible:true,img:'https://papifutbolesclavas.com.ar/wp-content/uploads/2024/03/cipolletti.png'
    },

    
   
   
  ]



}
