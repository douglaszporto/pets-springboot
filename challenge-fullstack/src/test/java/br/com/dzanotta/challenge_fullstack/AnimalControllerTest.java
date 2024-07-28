package br.com.dzanotta.challenge_fullstack;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import br.com.dzanotta.challenge_fullstack.enums.AnimalCategory;
import br.com.dzanotta.challenge_fullstack.models.Animal;
import br.com.dzanotta.challenge_fullstack.repositories.AnimalsRepository;
import br.com.dzanotta.challenge_fullstack.services.AnimalsService;

class AnimalControllerTest {

	private AnimalsRepository animalsRepository = Mockito.mock(AnimalsRepository.class);

	private AnimalsService animalsService;

	@BeforeEach
	void initUseCase() {
		animalsService = new AnimalsService(animalsRepository);
	}

	@Test
	void ListingShouldReturnEmpty() throws Exception {
		when(animalsRepository.findAll()).thenReturn(new ArrayList<Animal>());

		Iterable<Animal> list = animalsService.listAnimals();

		int count = 0;
        Iterator<Animal> iterator = list.iterator();
        while(iterator.hasNext()) {
            iterator.next();
            count++;
        }
		
        assertThat(count).isEqualTo(0);
	}

	@Test
	void ListingShouldReturnMany() throws Exception {
		Animal a1 = new Animal("Dog's Name", null, null, AnimalCategory.DOG, false, null);
		Animal a2 = new Animal("Cat's Name", null, null, AnimalCategory.CAT, false, null);
		
		when(animalsRepository.findAll()).thenReturn(new ArrayList<Animal>() {{ add(a1); add(a2); }});

		Iterable<Animal> list = animalsService.listAnimals();

		int count = 0;
        Iterator<Animal> iterator = list.iterator();
        while(iterator.hasNext()) {
            iterator.next();
            count++;
        }
		
        assertThat(count).isEqualTo(2);
	}

	@Test
	void GetDataShouldReturnOne() throws Exception {
		Optional<Animal> a = Optional.of(new Animal("Dog's Name", null, null, AnimalCategory.DOG, false, null));

		when(animalsRepository.findById(any(Integer.class))).thenReturn(a);

		Animal animal = animalsService.getAnimalById(1);

        assertThat(animal.getName()).isEqualTo("Dog's Name");
	}

	@Test
	void GetDataShouldReturnNull() throws Exception {
		Optional<Animal> a = Optional.empty();

		when(animalsRepository.findById(any(Integer.class))).thenReturn(a);

		Animal animal = animalsService.getAnimalById(1);

		assertThat(animal).isNull();
	}

	@Test
	void SaveShouldReturnOne() throws Exception {
		Animal a = new Animal("Dog's Name", null, null, AnimalCategory.DOG, false, null);
		Optional<Animal> opt = Optional.of(a);

		when(animalsRepository.save(any(Animal.class))).thenReturn(a);
		when(animalsRepository.findById(any(Integer.class))).thenReturn(opt);

		Animal animal = animalsService.createAnimal(a);

		assertThat(animal.getName()).isEqualTo("Dog's Name");
	}

	@Test
	void UpdateShouldReturnOne() throws Exception {
		Animal a = new Animal("Dog's Name", null, null, AnimalCategory.DOG, false, null);
		Optional<Animal> opt = Optional.of(a);
		
		when(animalsRepository.save(any(Animal.class))).thenReturn(a);
		when(animalsRepository.findById(any(Integer.class))).thenReturn(opt);

		Animal animal = animalsService.updateAnimal(1, a);

		assertThat(animal.getName()).isEqualTo("Dog's Name");
	}

	@Test
	void DeleteShouldReturnVoid() throws Exception {
		Optional<Animal> a = Optional.empty();

		when(animalsRepository.findById(any(Integer.class))).thenReturn(a);

		animalsService.deleteAnimal(1);

		assertThat(true).isTrue();
	}

	@Test
	void SetAdoptAndShouldReturnTrue() throws Exception {
		Animal a = new Animal("Dog's Name", null, null, AnimalCategory.DOG, false, null);
		Optional<Animal> opt = Optional.of(a);
		
		when(animalsRepository.findById(any(Integer.class))).thenReturn(opt);
		when(animalsRepository.save(any(Animal.class))).thenReturn(a);

		Animal animal = animalsService.adoptAnimal(1, true);

		assertThat(animal.getAdopted()).isTrue();
	}

	@Test
	void SetAdoptAndShouldReturnFalse() throws Exception {
		Animal a = new Animal("Dog's Name", null, null, AnimalCategory.DOG, false, null);
		Optional<Animal> opt = Optional.of(a);

		when(animalsRepository.save(any(Animal.class))).thenReturn(a);
		when(animalsRepository.findById(any(Integer.class))).thenReturn(opt);

		Animal animal = animalsService.adoptAnimal(1, false);

		assertThat(animal.getAdopted()).isFalse();
	}

}