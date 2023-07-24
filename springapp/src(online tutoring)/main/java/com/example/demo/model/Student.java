package com.example.demo.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Table(name="new_Student5")
@Entity
public class Student {
@Id
@Column(name="stud_id")
@GeneratedValue
private long stud_id;
@Column(name="FIRSTNAME")
private String firstname;
@Column (name="LASTNAME")
private String lastname;
@Column(name="PHONENUMBER")
private long phonenumber;
@Column(name="EMAILID")
private String emailid;
@Column(name="Password")
private String password;
public long getStud_id() {

	return stud_id;
}
public void setStudid(long stud_id) {
	this.stud_id = stud_id;
}
public String getFirstName() {
	return firstname;
}
public void setFirstName(String firstname) {
	this.firstname = firstname;
}
public String getLastName() {
	return lastname;
}
public void setLastName(String lastname) {
	this.lastname=lastname;
}
public long getPhoneNumber() {
	return phonenumber;
}
public void setPhoneNumber(long phonenumber) {
	this.phonenumber=phonenumber;
}
public String getEmailId() {
	return emailid;
}
public void setEmailId(String emailid) {
	this.emailid=emailid;
}
public String getPass() {
	return password ;
}
public void setPassword(String password) {
	this.password=password;
}
public Student(long stud_id,String firstname,String lastname,long phonenumber,String emailid,String password) {
	super();
	this.stud_id = stud_id;
	this.firstname = firstname;
	this.lastname = lastname;
	this.phonenumber=phonenumber;
	this.emailid=emailid;
	this.password = password;
}
public Student()
{
	}
}
