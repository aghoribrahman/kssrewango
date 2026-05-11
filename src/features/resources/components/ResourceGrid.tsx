import { motion, AnimatePresence } from "framer-motion";
import ResourceCard from "./ResourceCard";
import { Resource } from "@/data/resources";

interface ResourceGridProps {
  resources: Resource[];
}

const ResourceGrid = ({ resources }: ResourceGridProps) => {
  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {resources.map((res) => (
            <motion.div
              key={res.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ResourceCard resource={res} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {resources.length === 0 && (
        <div className="text-center py-20 opacity-50">
          <p className="text-lg">No resources found matching your filters.</p>
        </div>
      )}
    </>
  );
};

export default ResourceGrid;
