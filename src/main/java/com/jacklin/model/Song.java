package com.jacklin.model;

import org.springframework.data.annotation.Id;

public class Song {

    @Id private String id;

    private String title;
    private String artist;
    private String label;
    private int bpm;
    private String key;
    private String camelot;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public int getBpm() {
        return bpm;
    }

    public void setBpm(int bpm) {
        this.bpm = bpm;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getCamelot() {
        return camelot;
    }

    public void setCamelot(String camelot) {
        this.camelot = camelot;
    }
}
