package com.delivery.api.account;

import com.delivery.api.account.model.AccountMeResponse;
import com.delivery.db.account.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cglib.core.Local;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/account")
public class AccountApiController {
    private final AccountRepository accountRepository;

    @GetMapping("me")
    public AccountMeResponse me(){
        return AccountMeResponse.builder()
                .name("이부각")
                .email("bbuya@cat.com")
                .registeredAt(LocalDateTime.now())
                .build();
    }
}
