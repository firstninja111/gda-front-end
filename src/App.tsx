import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '~/context/ThemeContext'
import Page404 from '~/routes/404'
import { AuthProvider } from '~/context/AuthContext'
import { StripeProvider } from './context/StripeContext'
import { DataProvider } from './context/DataContext'
import HomePage from '~/routes/Home'
import HelpPage from '~/routes/Help'
import Assessment from '~/routes/Assessment/Assessments'
import LessonsListPage from '~/routes/LessonsList'
import PracticeListPage from '~/routes/PracticeList'
import PracticeExercisePage from '~/routes/PracticeExercise'
import PracticeExerciseLibrary from '~/routes/PracticeLibrary'

import ProfilePage from '~/routes/Profile'
import LessonPage from '~/routes/Lesson'
import { AssessmentForm } from '~/routes/Assessment'
import AssessmentDetail from '~/routes/Assessment/AssessmentDetail'
import SignIn from '~/routes/Auth/Login'
import Terms from '~/routes/Auth/Terms'
import { ProtectedRoute } from '~/components/common/ProtectedRoute'
import { QueryClient, QueryClientProvider } from 'react-query'

export const App = () => {
  // TODO(euforic): fix theme provider to work with dark mode
  const queryClient = new QueryClient()
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider initialTheme="light">
          <StripeProvider>
            <DataProvider>
              <AuthProvider>
                <Routes>
                  {/* Authed */}
                  <Route element={<ProtectedRoute redirectPath="/login" notAuthed={false} />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/lessons" element={<LessonsListPage />} />
                    <Route path="/lessons/:lessonId" element={<LessonsListPage />} />
                    <Route path="/lessons/:lessonId/units/:unitId" element={<LessonPage />} />
                    <Route path="/lessons/:lessonId/units/:unitId/quizzes/:quizId" element={<LessonPage />} />
                    <Route path="/practice" element={<PracticeListPage />} />
                    <Route path="/practice/:sectionId" element={<PracticeListPage />} />
                    <Route path="/practice/:lessonId/:practiceId" element={<PracticeExercisePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/assessments" element={<Assessment />} />
                    <Route path="/assessments/:name" element={<AssessmentDetail />} />
                    <Route path="/assessments/:name/form" element={<AssessmentForm />} />
                    <Route path="/help" element={<HelpPage />} />
                  </Route>
                  {/* Non Authed */}
                  <Route path="/login" element={<SignIn />} />
                  <Route path="/terms" element={<Terms />} />
                  {/* User menu */}
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </AuthProvider>
            </DataProvider>
          </StripeProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
