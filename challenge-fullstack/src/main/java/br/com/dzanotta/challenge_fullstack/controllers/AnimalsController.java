package br.com.dzanotta.challenge_fullstack.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.dzanotta.challenge_fullstack.models.Animal;
import br.com.dzanotta.challenge_fullstack.services.AnimalsService;

@RestController
@RequestMapping("/animals")
public class AnimalsController {

    @Autowired
    private AnimalsService animalsService;

    @GetMapping
    public @ResponseBody Iterable<Animal> listing() {
        return animalsService.listAnimals();
    }

    @GetMapping("/{id}")
    public @ResponseBody Animal getAnimal(@PathVariable Integer id) {
        return animalsService.getAnimalById(id);
    }

    @PostMapping(consumes="application/json", produces="application/json")
    public @ResponseBody Animal create(@RequestBody Animal animal) {
        return animalsService.createAnimal(animal);
    }

    @PutMapping(path="/{id}", consumes="application/json", produces="application/json")
    public Animal update(@RequestBody Animal animal, @PathVariable Integer id) {
        return animalsService.updateAnimal(id, animal);
    }

    @PutMapping(path="/{id}/adopt", consumes="application/json", produces="application/json")
    public Animal adopt(@RequestBody Map<String, Boolean> payload, @PathVariable Integer id) {
        return animalsService.adoptAnimal(id, payload.get("isAdopted"));
    }

    @DeleteMapping("/{id}")
    void deleteAnimal(@PathVariable Integer id) {
        animalsService.deleteAnimal(id);
    }
}
