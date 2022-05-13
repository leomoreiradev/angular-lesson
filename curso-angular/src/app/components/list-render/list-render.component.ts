import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/Animal';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDatails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDatails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    //Atualiza a lista de animais da
    //view trazendo apenas os animais com nome diferente de animal.name
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => {
      this.animals = animals;
    });
  }
}
