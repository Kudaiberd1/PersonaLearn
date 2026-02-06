import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import DashboardManager1 from '../pages/DashboardManager1';
import DashboardManager2 from '../pages/DashboardManager2';
import EmployeeList1 from '../pages/EmployeeList1';
import EmployeeList2 from '../pages/EmployeeList2';
import TrainingMaterials1 from '../pages/TrainingMaterials1';
import TrainingMaterials2 from '../pages/TrainingMaterials2';
import SystemSettings1 from '../pages/SystemSettings1';
import SystemSettings2 from '../pages/SystemSettings2';
import AnalyticsAdmin1 from '../pages/AnalyticsAdmin1';
import AnalyticsAdmin2 from '../pages/AnalyticsAdmin2';
import EmployeeSurvey from '../pages/EmployeeSurvey';
import AIKnowledgeCheck from '../pages/AIKnowledgeCheck';
import EmployeeTraining from '../pages/EmployeeTraining';
import AIDialog from '../pages/AIDialog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard-manager-1',
    element: <DashboardManager1 />,
  },
  {
    path: '/dashboard-manager-2',
    element: <DashboardManager2 />,
  },
  {
    path: '/employee-list-1',
    element: <EmployeeList1 />,
  },
  {
    path: '/employee-list-2',
    element: <EmployeeList2 />,
  },
  {
    path: '/training-materials-1',
    element: <TrainingMaterials1 />,
  },
  {
    path: '/training-materials-2',
    element: <TrainingMaterials2 />,
  },
  {
    path: '/system-settings-1',
    element: <SystemSettings1 />,
  },
  {
    path: '/system-settings-2',
    element: <SystemSettings2 />,
  },
  {
    path: '/analytics-admin-1',
    element: <AnalyticsAdmin1 />,
  },
  {
    path: '/analytics-admin-2',
    element: <AnalyticsAdmin2 />,
  },
  {
    path: '/employee-survey',
    element: <EmployeeSurvey />,
  },
  {
    path: '/ai-knowledge-check',
    element: <AIKnowledgeCheck />,
  },
  {
    path: '/employee-training',
    element: <EmployeeTraining />,
  },
  {
    path: '/ai-dialog',
    element: <AIDialog />,
  },
]);

export default router;
