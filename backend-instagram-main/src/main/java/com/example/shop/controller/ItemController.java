package com.example.shop.controller;

import com.example.shop.dto.item.ItemRequestDto;
import com.example.shop.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/items")
public class ItemController {

    private final ItemService itemService;

    @PostMapping
    public ResponseEntity<?> saveItem(@RequestPart("item")ItemRequestDto dto,
                                      @RequestPart("files")List<MultipartFile> files) {
        itemService.saveItem(dto, files);
        return ResponseEntity.status(HttpStatus.CREATED).body("상품이 성공적으로 생성되었습니다.");
    }

    @PutMapping("/{itemId}")
    public ResponseEntity<?> updateItem(@PathVariable("itemId") Long itemId,
                                        @RequestPart("item")ItemRequestDto dto,
                                        @RequestPart("files")List<MultipartFile> files) {
        itemService.updateItem(itemId, dto, files);
        return ResponseEntity.status(HttpStatus.OK).body("상품이 성공적으로 수정되었습니다.");
    }

    @PutMapping("/{itemId}/active")
    public ResponseEntity<?> activateItem(@PathVariable("itemId") Long itemId) {
        itemService.activateItem(itemId);
        return ResponseEntity.status(HttpStatus.OK).body("상품이 성공적으로 활성화 되었습니다.");
    }

    @PutMapping("/{itemId}/inactive")
    public ResponseEntity<?> inactiveItem(@PathVariable("itemId") Long itemId) {
        itemService.inActiveItem(itemId);
        return ResponseEntity.status(HttpStatus.OK).body("상품이 성공적으로 비활성화 되었습니다.");
    }

    @DeleteMapping("/{itemId}")
    public ResponseEntity<?> deleteItem(@PathVariable("itemId") Long itemId) {
        itemService.deleteItem(itemId);
        return ResponseEntity.status(HttpStatus.OK).body("상품이 성공적으로 삭제되었습니다.");
    }
}