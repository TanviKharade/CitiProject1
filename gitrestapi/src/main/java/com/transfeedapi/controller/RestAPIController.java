package com.transfeedapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
@RestController
public class RestAPIController {
 
 @RequestMapping("/api/hi")
 public String hi() {
 return "Hello world! >>> Message from <a href='https://grokonez.com' target='_blank'>grokonez.com</a>";
 }
}
