package com.jacklin.dao;

import com.jacklin.model.Song;
import com.jacklin.dao.SongRepositoryCustom;
import com.jacklin.utils.CircularList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Jacklin on 16/04/2016.
 */
public class SongRepositoryImpl implements SongRepositoryCustom {
    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Song> findCompatibleSongsByKey(String key) {
        List<String> keys = new CircularList<>();
        keys.add("G#m");
        keys.add("D#m");
        keys.add("A#m");
        keys.add("Fm");
        keys.add("Cm");
        keys.add("Gm");
        keys.add("Dm");
        keys.add("Am");
        keys.add("Em");
        keys.add("Bm");
        keys.add("F#m");
        keys.add("C#m");

        List<String> compatibleKeys = new ArrayList<>();
        int indexOfKey = keys.indexOf(key);
        compatibleKeys.add(keys.get(indexOfKey -1));
        compatibleKeys.add(keys.get(indexOfKey));
        compatibleKeys.add(keys.get(indexOfKey +1));

        Criteria criteria = Criteria.where("key").in(compatibleKeys);
        return mongoTemplate.find(Query.query(criteria), Song.class);
    }
}
