
package com.jacklin;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "song", path = "song")
public interface SongRepository extends MongoRepository<Song, String> {

	List<Song> findByArtist(@Param("artist") String artist);
	List<Song> findByKey(@Param("key") String key);

}
