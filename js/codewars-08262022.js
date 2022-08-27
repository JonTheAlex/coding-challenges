function getGrade (s1, s2, s3) {
    x = (s1 + s2 + s3) / 3
    switch (true) {
      case x < 60:
        return 'F'
        break;
      case (60 <= x && x < 70):
        return 'D'
        break;
      case (70 <= x && x < 80):
        return 'C'
        break;
      case (80 <= x  && x < 90):
        return 'B'
        break;
      case x >= 90:
        return 'A'
        break;
    }
  }