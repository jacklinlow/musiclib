package com.jacklin.utils;

import java.util.ArrayList;

/**
 * Created by Jacklin on 15/04/2016.
 */
public class CircularList<E> extends ArrayList<E> {

    @Override
    public E get(int index) {
        return super.get(index % size());
    }
}
