package com.example.library.controller;

import com.example.library.dto.BookDTO;
import com.example.library.service.BookService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping
    public ResponseEntity<BookDTO> createBook(@Valid @RequestBody BookDTO dto){
        BookDTO savedBook = bookService.createBook(dto);
        return ResponseEntity.status(201).body(savedBook);
    }
    @GetMapping("/getAll")
    public ResponseEntity<BookDTO> getAllBook()
    {

    }
}
