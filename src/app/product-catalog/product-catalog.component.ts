import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {
  vehicles: any[] = []; // Define vehicles como un array vacío

  constructor(private vehicleService: VehicleService) { } // Inyecta el servicio

  ngOnInit(): void {
    this.loadVehicles(); // Carga los vehículos al iniciar el componente
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(
      (data: any[]) => {
        this.vehicles = data; // Asigna los datos obtenidos a la propiedad vehicles
      },
      (error) => {
        console.error('Error al cargar vehículos:', error); // Manejo de errores
      }
    );
  }
}
