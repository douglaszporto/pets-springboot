package br.com.dzanotta.challenge_fullstack.models;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

import br.com.dzanotta.challenge_fullstack.enums.AnimalCategory;

@Entity
public class Animal {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @NotBlank(message = "Name is mandatory")
    private String name;

    private String description;
    private String image;

    @NotNull(message = "Category is mandatory")
    @Enumerated(EnumType.STRING)
    private AnimalCategory category;

    private Boolean adopted;

    @Temporal(TemporalType.DATE)
    private LocalDate birthDate;

    public Animal() {
    }

    public Animal(String name, String description, String image, AnimalCategory category, Boolean adopted, LocalDate birthDate) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.category = category;
        this.adopted = adopted;
        this.birthDate = birthDate;
    }

    /* GETs */

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    public AnimalCategory getCategory() {
        return category;
    }

    public Boolean getAdopted() {
        return adopted;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    /* SETs */

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setCategory(AnimalCategory category) {
        this.category = category;
    }

    public void setAdopted(Boolean adopted) {
        this.adopted = adopted;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }


    @Override
    public String toString() {
        return "Animal{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", category=" + category +
                ", adopted=" + adopted +
                ", birthDate=" + birthDate +
                '}';
    }
}
