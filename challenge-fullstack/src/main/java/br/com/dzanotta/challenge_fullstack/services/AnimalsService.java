package br.com.dzanotta.challenge_fullstack.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.dzanotta.challenge_fullstack.models.Animal;
import br.com.dzanotta.challenge_fullstack.repositories.AnimalsRepository;

@Service
public class AnimalsService {

    private final AnimalsRepository animalsRepository;

    @Autowired
    public AnimalsService(AnimalsRepository animalsRepository) {
        this.animalsRepository = animalsRepository;
    }

    public Iterable<Animal> listAnimals() {
        return this.animalsRepository.findAll();
    }

    public Animal getAnimalById(Integer id) {
        return this.animalsRepository.findById(id).orElse(null);
    }

    public Animal createAnimal(Animal animal) {
        return this.animalsRepository.save(animal);
    }

    public void deleteAnimal(Integer id) {
        this.animalsRepository.deleteById(id);
    }

    public Animal updateAnimal(Integer id, Animal animal) {
        Animal animalToUpdate = this.animalsRepository.findById(id).orElse(null);
        if (animalToUpdate == null) {
            return null;
        }
        animalToUpdate.setName(animal.getName());
        animalToUpdate.setCategory(animal.getCategory());
        animalToUpdate.setAdopted(animal.getAdopted());
        return this.animalsRepository.save(animalToUpdate);
    }

    public Animal adoptAnimal(Integer id, Boolean isAdopted) {
        Animal animal = this.animalsRepository.findById(id).orElse(null);
        if (animal == null) {
            return null;
        }
        animal.setAdopted(isAdopted);
        return this.animalsRepository.save(animal);
    }

}
