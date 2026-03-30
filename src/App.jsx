import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import PublicLayout from './components/PublicLayout'
import ProtectedRoute from './components/ProtectedRoute'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Profile = lazy(() => import('./pages/Profile'))

const Sdlc = lazy(() => import('./pages/intro/Sdlc'))
const Requirements = lazy(() => import('./pages/intro/Requirements'))
const Uml = lazy(() => import('./pages/intro/Uml'))

const Solid = lazy(() => import('./pages/principles/Solid'))
const PatternOverview = lazy(() => import('./pages/principles/PatternOverview'))

const Creational = lazy(() => import('./pages/patterns/Creational'))
const Structural = lazy(() => import('./pages/patterns/Structural'))
const Behavioral = lazy(() => import('./pages/patterns/Behavioral'))

const Oop = lazy(() => import('./pages/practice/Oop'))
const Tdd = lazy(() => import('./pages/practice/Tdd'))
const Refactoring = lazy(() => import('./pages/practice/Refactoring'))

const Playground = lazy(() => import('./pages/Playground'))

const LecturesHome = lazy(() => import('./pages/lectures/LecturesHome'))
const LectureWriteForm = lazy(() => import('./pages/lectures/LectureWrite'))
const LectureDetailView = lazy(() => import('./pages/lectures/LectureDetail'))
const LectureSdlc = lazy(() => import('./pages/lectures/LectureSdlc'))
const LectureRequirements = lazy(() => import('./pages/lectures/LectureRequirements'))
const LectureUml = lazy(() => import('./pages/lectures/LectureUml'))
const LectureSolid = lazy(() => import('./pages/lectures/LectureSolid'))
const LecturePatternOverview = lazy(() => import('./pages/lectures/LecturePatternOverview'))
const LectureCreational = lazy(() => import('./pages/lectures/LectureCreational'))
const LectureStructural = lazy(() => import('./pages/lectures/LectureStructural'))
const LectureBehavioral = lazy(() => import('./pages/lectures/LectureBehavioral'))
const LectureOop = lazy(() => import('./pages/lectures/LectureOop'))
const LectureTdd = lazy(() => import('./pages/lectures/LectureTdd'))
const LectureRefactoring = lazy(() => import('./pages/lectures/LectureRefactoring'))

const WorkbookHome = lazy(() => import('./pages/workbook/WorkbookHome'))
const WorkbookWriteForm = lazy(() => import('./pages/workbook/WorkbookWrite'))
const WorkbookDetailView = lazy(() => import('./pages/workbook/WorkbookDetail'))
const WorkbookSdlc = lazy(() => import('./pages/workbook/WorkbookSdlc'))
const WorkbookRequirements = lazy(() => import('./pages/workbook/WorkbookRequirements'))
const WorkbookUml = lazy(() => import('./pages/workbook/WorkbookUml'))
const WorkbookSolid = lazy(() => import('./pages/workbook/WorkbookSolid'))
const WorkbookPatternOverview = lazy(() => import('./pages/workbook/WorkbookPatternOverview'))
const WorkbookCreational = lazy(() => import('./pages/workbook/WorkbookCreational'))
const WorkbookStructural = lazy(() => import('./pages/workbook/WorkbookStructural'))
const WorkbookBehavioral = lazy(() => import('./pages/workbook/WorkbookBehavioral'))
const WorkbookOop = lazy(() => import('./pages/workbook/WorkbookOop'))
const WorkbookTdd = lazy(() => import('./pages/workbook/WorkbookTdd'))
const WorkbookRefactoring = lazy(() => import('./pages/workbook/WorkbookRefactoring'))

const References = lazy(() => import('./pages/References'))
const Favorites = lazy(() => import('./pages/Favorites'))

const CommunityList = lazy(() => import('./pages/community/CommunityList'))
const CommunityWrite = lazy(() => import('./pages/community/CommunityWrite'))
const CommunityView = lazy(() => import('./pages/community/CommunityView'))

const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

              <Route path="/intro/sdlc" element={<Sdlc />} />
              <Route path="/intro/requirements" element={<Requirements />} />
              <Route path="/intro/uml" element={<Uml />} />

              <Route path="/principles/solid" element={<Solid />} />
              <Route path="/principles/pattern-overview" element={<PatternOverview />} />

              <Route path="/patterns/creational" element={<Creational />} />
              <Route path="/patterns/structural" element={<Structural />} />
              <Route path="/patterns/behavioral" element={<Behavioral />} />

              <Route path="/practice/oop" element={<Oop />} />
              <Route path="/practice/tdd" element={<Tdd />} />
              <Route path="/practice/refactoring" element={<Refactoring />} />

              <Route path="/playground" element={<Playground />} />

              <Route path="/lectures" element={<LecturesHome />} />
              <Route path="/lectures/write" element={<ProtectedRoute><LectureWriteForm /></ProtectedRoute>} />
              <Route path="/lectures/edit/:id" element={<ProtectedRoute><LectureWriteForm /></ProtectedRoute>} />
              <Route path="/lectures/view/:id" element={<LectureDetailView />} />
              <Route path="/lectures/sdlc" element={<LectureSdlc />} />
              <Route path="/lectures/requirements" element={<LectureRequirements />} />
              <Route path="/lectures/uml" element={<LectureUml />} />
              <Route path="/lectures/solid" element={<LectureSolid />} />
              <Route path="/lectures/pattern-overview" element={<LecturePatternOverview />} />
              <Route path="/lectures/creational" element={<LectureCreational />} />
              <Route path="/lectures/structural" element={<LectureStructural />} />
              <Route path="/lectures/behavioral" element={<LectureBehavioral />} />
              <Route path="/lectures/oop" element={<LectureOop />} />
              <Route path="/lectures/tdd" element={<LectureTdd />} />
              <Route path="/lectures/refactoring" element={<LectureRefactoring />} />

              <Route path="/workbook" element={<WorkbookHome />} />
              <Route path="/workbook/write" element={<ProtectedRoute><WorkbookWriteForm /></ProtectedRoute>} />
              <Route path="/workbook/edit/:id" element={<ProtectedRoute><WorkbookWriteForm /></ProtectedRoute>} />
              <Route path="/workbook/view/:id" element={<WorkbookDetailView />} />
              <Route path="/workbook/sdlc" element={<WorkbookSdlc />} />
              <Route path="/workbook/requirements" element={<WorkbookRequirements />} />
              <Route path="/workbook/uml" element={<WorkbookUml />} />
              <Route path="/workbook/solid" element={<WorkbookSolid />} />
              <Route path="/workbook/pattern-overview" element={<WorkbookPatternOverview />} />
              <Route path="/workbook/creational" element={<WorkbookCreational />} />
              <Route path="/workbook/structural" element={<WorkbookStructural />} />
              <Route path="/workbook/behavioral" element={<WorkbookBehavioral />} />
              <Route path="/workbook/oop" element={<WorkbookOop />} />
              <Route path="/workbook/tdd" element={<WorkbookTdd />} />
              <Route path="/workbook/refactoring" element={<WorkbookRefactoring />} />

              <Route path="/references" element={<References />} />
              <Route path="/favorites" element={<Favorites />} />

              <Route path="/community" element={<CommunityList />} />
              <Route path="/community/write" element={<ProtectedRoute><CommunityWrite /></ProtectedRoute>} />
              <Route path="/community/:id" element={<CommunityView />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}
