package com.jacklin.dao;

import com.jacklin.model.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Jacklin on 16/04/2016.
 */
@Service
public class SongService {
    @Autowired
    private SongRepository repository;

    public List<Song> findByKey(String key){
        return repository.findByKey(key);
    }

    public List<Song> findCompatibleSongsByKey(String key){
        return repository.findCompatibleSongsByKey(key);
    }

}
