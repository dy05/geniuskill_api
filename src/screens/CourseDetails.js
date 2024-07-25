import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
  FlatList,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Color } from "../components/GlobalStyles";
import {addUserCourse, getCourseDetails} from "../services/courseService";
import Svg, { Path } from 'react-native-svg';
import {getAuthUser, setAuthUser} from "../services/authService";

const CoursePage = ({ route }) => {
  const courseProgress = 0.5; // 50% de progression
  const navigation = useNavigation();
  const [sections, setSections] = useState([]);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const { id } = route.params;
  const [activeUser, setActiveUser] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [quizVisible, setQuizVisible] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerValidationVisible, setAnswerValidationVisible] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [canShowAddCourseButton, setCanShowAddCourseButton] = useState(true);

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
    const isCorrect = option.toString() === getCurrentQuestion()?.response?.toString();
    setIsAnswerCorrect(isCorrect);
    setScore(isCorrect ? score + 1 : score);
    setAnswerValidationVisible(true);
  };

  const handleNextQuestion = () => {
    setAnswerValidationVisible(false);
    if (currentQuestionIndex < course.quizzes?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
      setQuizVisible(false);
    }
  };

  const handleQuizStart = () => {
    setQuizVisible(true);
    if (currentQuestionIndex === null) {
      setCurrentQuestionIndex(9);
      setQuizFinished(false);
      setScore(7);
      setSelectedAnswer(null);
    }
  };

  const handleCloseResultModal = () => {
    setQuizVisible(false);
    setQuizFinished(false);
    setCurrentQuestionIndex(null);
    setScore(0);
  };

  const getCurrentQuestion = () => {
    const _quizzes = course.quizzes;
    if (_quizzes?.length) {
      let _quiz = _quizzes[currentQuestionIndex];
      return _quiz ??  null;
    }

    return null;
  };

  const hasCourse = () => {
    let _courses = activeUser?.courses ?? [];
    let _coursesLength = _courses.length;
    console.log('courses');
    console.log(_courses);
    for (let i = 0; i < _coursesLength; i++) {
      if (_courses[i]?.id?.toString() === course?.id?.toString()) {
        return true;
      }
    }

    return false;
  };

  const hideNotification = () => {
    setNotificationMessage(null);
    setNotificationVisible(false);
  };

  const addCourseToUserCoursesRequest = () => {
    if (!formLoading && course?.id) {
      setFormLoading(true);
      addUserCourse(course.id)
          .then(() => {
            if (activeUser) {
              let _authUser = {...activeUser};
              let _courses = _authUser.courses ?? [];
              _courses.push({id: course.id});
              _authUser.courses = [..._courses];
              setAuthUser(_authUser).then();
            }
            setNotificationMessage("Cours ajouté avec succès !");
            setNotificationVisible(true);
            setCanShowAddCourseButton(false);
          })
          .catch((response) => {
            setNotificationMessage("Erreur inattendue !");
            setNotificationVisible(true);
          })
          .finally(() => {
            setFormLoading(false);
          })
    }
  };

  useEffect(() => {
    if (!loading) {
      getAuthUser()
          .then((data) => {
            setActiveUser(data);
          });

      let _course = null;
      getCourseDetails(id)
          .then((response) => {
            _course = response?.data?.course ?? null;
            if (_course) {
              setCourse(_course);
              setSections(_course.items);
            }
          })
          .catch ((error) => {
            console.error(error.message);
          })
          .finally(() => {
            if (!_course) {
              navigation.navigate('Home', {screen: 'HomeScreen'});
            }
          });
    } else {
      setLoading(false);
    }
  }, [id, loading]);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {course ? (
          <View>
            <View style={styles.pageDuCours}>
              <View style={styles.imageContainer}>
                <Image
                    style={styles.pageDuCoursChild}
                    contentFit="cover"
                    source={require("../../assets/images/webdevelopment.png")}
                />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{course.title}</Text>
              </View>
              <Text style={styles.courseDescription}>
                {course.description}
              </Text>
              <Text style={styles.courseDetails}>
                {course.details}
              </Text>
              <View style={styles.sectionsContainer}>
                {sections.map((section, index) => (
                    <View key={index} style={styles.section}>
                      <Text style={styles.sectionTitle}>{section.title}</Text>
                      <Text style={styles.sectionText}>{section.description}</Text>
                      <View style={styles.sectionFooter}>
                        <Text style={styles.sectionHours}>{section.duration} Mins</Text>
                        <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('VideoPlayer', { videoUrl: section.videoUrl })}>
                          <Icon name="play-circle-outline" size={30} color="#1E90FF" />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.progressBarContainer}>
                        <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
                      </View>
                    </View>
                ))}
              </View>
            </View>

            <View style={styles.quizButtonContainer}>
              <TouchableOpacity style={styles.quizButton} onPress={() => handleQuizStart()}>
                <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path
                      d="M18 19.5C18.425 19.5 18.794 19.344 19.107 19.032C19.42 18.72 19.576 18.351 19.575 17.925C19.574 17.499 19.418 17.1305 19.107 16.8195C18.796 16.5085 18.427 16.352 18 16.35C17.573 16.348 17.2045 16.5045 16.8945 16.8195C16.5845 17.1345 16.428 17.503 16.425 17.925C16.422 18.347 16.5785 18.716 16.8945 19.032C17.2105 19.348 17.579 19.504 18 19.5ZM16.875 14.7H19.125C19.125 13.975 19.2 13.444 19.35 13.107C19.5 12.77 19.85 12.326 20.4 11.775C21.15 11.025 21.65 10.419 21.9 9.957C22.15 9.495 22.275 8.951 22.275 8.325C22.275 7.2 21.881 6.2815 21.093 5.5695C20.305 4.8575 19.274 4.501 18 4.5C16.975 4.5 16.0815 4.7875 15.3195 5.3625C14.5575 5.9375 14.026 6.7 13.725 7.65L15.75 8.475C15.975 7.85 16.2815 7.3815 16.6695 7.0695C17.0575 6.7575 17.501 6.601 18 6.6C18.6 6.6 19.0875 6.769 19.4625 7.107C19.8375 7.445 20.025 7.901 20.025 8.475C20.025 8.825 19.925 9.1565 19.725 9.4695C19.525 9.7825 19.175 10.176 18.675 10.65C17.85 11.375 17.344 11.944 17.157 12.357C16.97 12.77 16.876 13.551 16.875 14.7ZM6 24V0H30V24H6ZM0 30V6H3V27H24V30H0Z"
                      fill="#1B5091"/>
                </Svg>
                <Text style={styles.quizButtonText}>
                  Quiz - {course.quizzes?.length} Questions
                </Text>
              </TouchableOpacity>
            </View>

            {quizVisible? (
                <Modal
                    isVisible={true}
                    onBackdropPress={() => setQuizVisible(false)}
                >
                  <View style={addStyles.modalContent}>
                    {getCurrentQuestion() ? (
                        <View style={addStyles.questions}>
                          <Text style={addStyles.question}>
                            {getCurrentQuestion().title}
                          </Text>
                          <FlatList
                              data={getCurrentQuestion().choices}
                              renderItem={({ item }) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={addStyles.option}
                                    onPress={() => handleAnswerSelection(item.id)}
                                >
                                  <Text style={addStyles.optionText}>{item.text}</Text>
                                </TouchableOpacity>
                              )}
                              keyExtractor={(item, index) => index.toString()}
                          />
                        </View>
                    ) : (
                        <Text>Loading...</Text>
                    )}

                    <Button
                        style={styles.closeButton}
                        title={"Fermer"}
                        onPress={() => setQuizVisible(false)}
                    />
                  </View>
                </Modal>
            ) : null}

            {answerValidationVisible ? (
              <Modal isVisible={true}>
                <View style={addStyles.modalContent}>
                  <Text style={addStyles.feedback}>
                    {isAnswerCorrect ? 'Correct!' : 'Incorrect!'}
                  </Text>
                  <Button
                      title={"Suivant"}
                          onPress={handleNextQuestion} />
                </View>
              </Modal>
            ) : null}

            {notificationVisible && notificationMessage ? (
              <Modal isVisible={true}
                     onBackdropPress={() => hideNotification()}
              >
                <View style={addStyles.modalContent}>
                  <Text style={addStyles.feedback}>
                    {notificationMessage}
                  </Text>
                  <Button
                      style={styles.closeButton}
                      title={"Fermer"}
                      onPress={() => hideNotification()} />
                </View>
              </Modal>
            ) : null}

            {quizFinished ? (
                <Modal
                    isVisible={true}
                    onBackdropPress={() => handleCloseResultModal()}
                >
                  <View style={addStyles.modalContent}>
                    <Text style={addStyles.resultText}>Quiz terminé!</Text>
                    <Text style={addStyles.resultText}>Your Score: {score}/{course.quizzes?.length}</Text>
                    <Button
                        style={styles.closeButton}
                        title="Close"
                            onPress={() => handleCloseResultModal()} />
                  </View>
                </Modal>
            ) : null}

            {!hasCourse() && canShowAddCourseButton ? (
                <Button onPress={() => addCourseToUserCoursesRequest()} style={styles.button} title={"Ajouter le cours"}/>
            ) : null}
          </View>
      ) : (
          <Text style={styles.title}>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 20,
  },
  answerQuestion: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pageDuCours: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  pageDuCoursChild: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: Color.primary,
  },
  courseDescription: {
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  courseDetails: {
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  sectionsContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: Color.lightGray,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  sectionFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionHours: {
    fontSize: 14,
    color: Color.darkGray,
  },
  playButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  progressBarContainer: {
    height: 5,
    backgroundColor: Color.gray,
    borderRadius: 2.5,
    marginTop: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: Color.primary,
    borderRadius: 2.5,
  },
  quizButtonContainer: {
    marginTop: 10,
  },
  quizButton: {
    backgroundColor: Color.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    gap: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  quizButtonText: {
    color: "#0288d1",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    flexDirection: 'row',
    marginTop: 40,
  }
});

const addStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  questions: {
    padding: 20,
    marginBottom: 60,
  },
  option: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
  },
  feedback: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    width: 'fit-content',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0288d1', // Couleur bleue pour le titre
  },
});

export default CoursePage;
