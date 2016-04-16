package com.jacklin;


import com.jacklin.dao.SongService;
import com.jacklin.model.Song;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
@Configuration
@ComponentScan
public class MusiclibApplication implements CommandLineRunner {

	@Autowired
	private SongService songService;

	private static final Logger logger = LoggerFactory.getLogger(MusiclibApplication.class);

	public void run(String... args) throws Exception {
		List<Song> song = songService.findCompatibleSongsByKey("Am");
		logger.info("result of getSku is {}", song);
	}


	public static void main(String[] args) {
		SpringApplication.run(MusiclibApplication.class, args);
	}
}
