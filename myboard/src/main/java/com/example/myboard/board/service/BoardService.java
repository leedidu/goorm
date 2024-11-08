package com.example.myboard.board.service;

import com.example.myboard.board.db.BoardEntity;
import com.example.myboard.board.db.BoardRepository;
import com.example.myboard.board.model.BoardRequest;
import com.example.myboard.board.model.BoardResponse;
import com.example.myboard.board.model.BoardViewResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepositoy;

    public BoardResponse create(BoardRequest boardRequest) {
        var entity = BoardEntity.builder()
                    .boardName(boardRequest.getBoardName())
                    .status("REGISTERED")
                    .build();

        var saveEntity = boardRepositoy.save(entity);

        return BoardResponse.builder()
                .boardId(saveEntity.getId())
                .status(saveEntity.getStatus())
                .build();
    }

    public List<BoardViewResponse> getAllBoards() {
        return boardRepositoy.findAll().stream()
                .map(board->BoardViewResponse.builder()
                        .boardId(board.getId())
                        .boardName(board.getBoardName())
                        .status(board.getStatus())
                        .build())
                .collect(Collectors.toList());
    }
}
