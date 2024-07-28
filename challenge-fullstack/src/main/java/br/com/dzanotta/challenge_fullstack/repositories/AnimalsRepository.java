package br.com.dzanotta.challenge_fullstack.repositories;

import org.springframework.data.repository.CrudRepository;
import br.com.dzanotta.challenge_fullstack.models.Animal;

public interface AnimalsRepository extends CrudRepository<Animal, Integer> {

}
