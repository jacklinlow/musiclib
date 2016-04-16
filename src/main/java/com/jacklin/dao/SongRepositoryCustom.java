package com.jacklin.dao;

import com.jacklin.model.Song;

import java.util.List;

/**
 * Created by Jacklin on 16/04/2016.
 */
public interface SongRepositoryCustom {
    public List<Song> findCompatibleSongsByKey(String key);
}
