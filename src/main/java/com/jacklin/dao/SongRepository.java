
package com.jacklin.dao;

import com.jacklin.model.Song;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "song", path = "song")
public interface SongRepository extends MongoRepository<Song, String>, SongRepositoryCustom {

	List<Song> findByArtist(@Param("artist") String artist);
	List<Song> findByKey(@Param("key") String key);

	@Query(value = "{key: ?0}")
	List<Song> findCompatibleSongsByKey(@Param("key") String key);

}
